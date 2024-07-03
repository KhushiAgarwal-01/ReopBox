import fetch from "node-fetch"


export const explorrepos=async(req,res,next)=>{
    const {language}=req.params;
    try{
    const response=await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,{
        headers:{
            authorization:`token ${process.env.GITHUB_API_KEY}` 
        },
    })
    const data=await response.json();
    res.status(200).json({repos:data.items});

}
catch(error){
    res.status(401).json({error:error.message});
}

}