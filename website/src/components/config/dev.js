export const adminurl = '/admin/v1'

// export const BaseUrl = 'http://192.168.184.132:3000/api/v1/admin'

export const BaseUrluser = 'https://api.thelastvoicemessage.com/api/v1/user'
// export const BaseUrluser = 'http://192.168.1.63:3000/api/v1/user'

export const getImageLink = key => `${BaseUrluser}/audio/${key}`;


export const getPdf = key => `${BaseUrluser}/pdstext/${key}`;