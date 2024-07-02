
export function formatMemberDate(input){
    const options={month:"short",day:'2-digit',year:"numeric"};
    const formattedDate=new Date(input).toLocaleDateString("en-us",options);
    return formattedDate;
}

