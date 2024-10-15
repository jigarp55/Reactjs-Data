import authFetch from "../common/interceptors";


export async function usergetData()
{
 let p =  await authFetch.get("accounts")
 return p;
}