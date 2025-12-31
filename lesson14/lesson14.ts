enum ApiStatus{
    LOADING = "loading", 
    SUCCESS = "success",
    ERROR = "error"
}

let getApiStatus: ApiStatus = ApiStatus.SUCCESS;
console.log(getApiStatus);
console.log(typeof getApiStatus);