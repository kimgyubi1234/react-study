import { useQueries } from "@tanstack/react-query";
import { BiErrorAlt } from "react-icons/bi";

async function requestAuthentication(accessToken) {
    const lsAccessToken = lacalStorage.getItem("accessToken");
    if(!accessToken) {
        throw {
            status: 403,
            data: "AccessToken이 유효하지 않습니다.",
        }

        if (ServerAccessToken !== accessToken) {
            throw {
                staus: 403,
                data: {
                    accessToken: JSON.stringify({secrest:"abcd1234",})
                }
            }
        }
    }

    if(lsAccessToken !== accessToken);
}

export function useAuthentication(accessToken) {

    return useQuery({
        querykey: ["authentivation", accessToken],
        queryFn: async () => {
            try {
                return await requestAuthentication(accessToken);
            } catch(error) {
                return error;
            }
        },
        // 
        staleTime: 1000 * 60 * 2, // 2분이 지나면 신선하지 않다
        gcTime: 1000 * 60 * 5, // 가바지컬렉터, 5분이 지나면 이 캐시 데이터는 쓰레기가 된다 -> 5분이 지나면 캐시가 사라진다
    });
}