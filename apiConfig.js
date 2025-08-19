
const environment = "localhost";

const baseUrls = {
    dev: "https://tbgpccr.tn.gov.in/bgpccr_api/v1",
    prod: "https://tngis.tnega.org/tgbpccr/bgpccr_api/v1",
    localhost: "http://192.168.5.247:2209"
};

const BASE_API_URL = baseUrls[environment];
