import * as s from ".styles";
import Header from "../../components/Header/Header";
import MDEditor from "@uiw/react-md-editor";
import { use, useEffect, useState } from "react";
import { css } from "@emotion/react";
import Select from "react-select/base";
import Button from "../../components/Button/Button";
import { GiAirplane } from "react-icons/gi";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { replace, useNavigate } from "react-router";

function PostRegister() {
    const navigate = useNavigate();
    const authentication = useAuthentication(localStorage.getItem("accessTocken"));
    
    const [ interval, setInterval ] =useState("");
    const [ title, setTitle ] = useState("");
    const [ value, setValue ] = useState("");
    const [ thumbnail, setThumbnail ] = useState({
        file: null,
        dataUrl: null,
    });

    const [category, setCategory ] = useState('common');

    const options = [
        { value: 'common', label: '일반게시글' },
        { value: 'backend', label: 'Backend' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'database', label: 'Database' },
    ];

    const handleTitleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const readFileDataUrl = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file);
        });
    }

    const handleThembnailOnClick = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");

        input.onchange = (e) => {
            const files = Array.from(e.target.files);
            readFileDataUrl(files[0])
            .then((dataUrl) => {
                setThumbnail(prev => ({
                    ...prev,
                    file: files[0],
                    dataUrl: dataUrl,
                }));
            });
        }
        input.click();
    }

    const handleCategoryOnChange = (option) => {
        setCategory(option.value);
    }

    const handleTempSaveOnClick = () => {
        const tempPost = {
            "title": title,
            "content" : value,
            "thumbnail": thumbnail,
            "category": category,
        }
        localStorage.setItem("tempPost", JSON.stringify(tempPost));
        alert("게시글이 임시저장 되었습니다.");
    }

    const handleSubmitOnClick = () => {
        let postsJason = JSON.parse(localStorage.getItem("posts"));
        posts = posts ?? [];
        const newPost = {
            "title": title,
            "content" : value,
            "thumbnail": thumbnail,
            "category": category,
            "postingDate": new Date(),
            "user": authentication.data.data,
        }
        posts = [...posts, newPost];
        console.log(posts);
        localStorage.setItem("posts", JSON.stringify(posts));
        alert("발행이 완료되었습니다.");
        clearInterval(interval);
        localStorage.removeItem("tempPost");
        navigate("/", {
            replace: true,
        })
    }

    useEffect(() => {
        const tempPost = localStorage.getItem("tempPost");
        if (!!tempPost) {
            const tempPost = JSON.parse(tempPostJson);
            console.log(tempPost)
            setTitle(tempPost.title);
            setValue(tempPost.content);
            setThumbnail(tempPost.thumbnail);
            setCategory(tempPost.category);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const tempPost = {
                "title": title,
                "content" : value,
                "thumbnail": thumbnail,
                "category": category,
            }
        localStorage.setItem("tempPost", JSON.stringify(tempPost));
        }, 5000);
        setInterval(itv);
        return () => {
            clearInterval(itv);
        }
    }, [title, value, thembnail. category]);

    return (
           <div css={s.wrap}>
                <Header />
                <div css={s.layout}>
                    <main css={s.main}>
                        <div css={s.titleInput}>
                            <TextInput placeholer={"작성하실 글의 제목을 입력해주세요."} value={title} onChange={handleTitleOnChange} />
                        </div>
                        <MDEditor
                            value={value}
                            onChange={setValue}
                            data-color-mode="light"
                            height={"500px"}
                            css={s.editor}
                        />
                    </main>
                    <aside css={s.sidebar}>
                        <div css={s.thumbnail(thumbnail.dataUrl)}>
                            <label htmlFor="">썸네일</label>
                            <div onClick={handleThembnailOnClick}>
                                {
                                    !thumbnail.dataUrl && 
                                    <>
                                        <BiImageAdd />
                                        <p>이미지 업로드</p>
                                    </>
                                }
                            </div>
                            <Button onClick={() => setTumbanail({file: null, dataUrl:null})}>썸네일 삭제</Button>
                        </div>
                        <div css={s.categories}>
                            <label>카테고리</label>
                            <Select options={options} defaultValue={options[0]} 
                            value={options.find(option => option.value === category)} 
                            onChange={handleCategoryOnChange}/>
                        </div>
                        <div css={s.submitButtonGroup}>
                            <Button onClick={handleCategoryOnChange}>임시저장</Button>
                            <Button onClick={handleSubmitOnClick}><PiPaperPlaneTiltLight />발행하기</Button>
                        </div>
                    </aside>
                </div>
           </div>
       )
}

export default PostRegister;