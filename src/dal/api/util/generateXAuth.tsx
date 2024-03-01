import md5 from "md5"

export const generateXAuth =(password:string)=>{
    const currentUtcDate = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const authString = `${password}_${currentUtcDate}`;
    const xAuth = md5(authString);
    return xAuth;
}

