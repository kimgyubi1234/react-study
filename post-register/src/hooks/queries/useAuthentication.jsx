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
    });
}