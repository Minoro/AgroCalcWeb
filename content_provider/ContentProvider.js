/**
* Contem as constants úteis ao longo do desenvolvimento
*/
function ContentProvider(){}

/* Cógidos do HTTP */
ContentProvider.HTTP_RESPONSE_CODE = {
    OK : {
        CODE : 200,
        DETAIL : 'Successful request'
    },
    CREATED : {
        CODE : 201,
        DETAIL : 'New resource created'
    },
    NOT_FOUND : {
        CODE : 404,
        DETAIL : 'Not Found'
    },
    INTERNAL_SERVER_ERROR : {
        CODE : 500,
        DETAIL : 'Internal Server Error'
    }
    
}


/* Informações de desenvolvimento */
ContentProvider.CONFIG = {
    APP_NAME : 'Agro Calc Web',
    DEV_PORT : 8080
}
    
module.exports = ContentProvider;