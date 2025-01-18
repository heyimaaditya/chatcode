import moment from "moment";
export function formatMessages(username:string,text:string){
    return{
        username,
        text,
        time:moment().format("h:mm a"),
    };
}