import slugify from 'slugify'

export default function slug(name){
    return slugify(name, { lowercase: true }).replace(/[^\w\-]+/g, '')
}