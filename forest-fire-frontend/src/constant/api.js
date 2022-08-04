const baseUrl = "http://0.0.0.0:17792";
const loginPath = "/api/v1/login"
const donationPath = "/api/v1/donation"
const ticketPath = "/api/v1/ticket"


const loginApiUrl = () => {
    return baseUrl+loginPath;
}

const donationApiUrl = () => {
    return baseUrl+donationPath;
}

const ticketApiUrl = () => {
    return baseUrl+ticketPath;
}

export {loginApiUrl, donationApiUrl, ticketApiUrl}
































