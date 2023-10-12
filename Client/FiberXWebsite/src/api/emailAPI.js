import ApiHelpers from '@/api/apiInstance'
const api = new ApiHelpers();

const contactEmail = async (form_data) => {
    const config = {  method: 'POST', url: `/send_message/`, data: form_data }
    
    try {
        const res = await api.sendRequest(config);
        return res;
    } 
    catch(err){
        if (err && err.response && err.response.status && err.response.status == 401 ) { return { status : 'logout'}}

        console.log(`something went wrong ${err}`)
        return { status: "error", msg: "something went wrong please try again later."}
    };
};

export { contactEmail, }