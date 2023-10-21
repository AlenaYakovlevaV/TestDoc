export const FunctionDate = (date) => {
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const mm = date.getUTCMonth()+1 < 10 ? `0${date.getUTCMonth()+1}` : date.getUTCMonth()+1;
    const yy = date.getUTCFullYear();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();;
    
    return `${dd}.${mm}.${yy} (${hour}:${minute})`
}