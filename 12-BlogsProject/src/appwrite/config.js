import conf from '../conf/conf.js';
import { Client, ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,userid,status}){
         try{
            return await this.databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,        //sir ne slug liye unque id ke roop me
                {      title,
                       content,
                       featuredImage,
                       status,
                       userid

                }

            )

         }
         catch(error){
            console.log("appwrite service::create post ::error ",error);
         }
        
    }
     
    async updatePost(slug,{title,content,featuredImage,status}){
          try {
             return await this.databases.updateDocument(
               conf.appwriteDataBaseId,
               conf.appwriteCollectionId,
               {
                title,
                content,
                featuredImage,
                status
               }
             )
            
          } catch (error) {
             console.log("appwrite::update post ::error::",error)
          }


    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("appwrite::delete post ::error::",error)
            return false;
        }

    }
    
    async getPost(slug){      //single post mila yaha se
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteProjectId,
                slug
                
                
            )
            
        } catch (error) {
             console.log("appwrite:: getpost ::error::",error)
           return false
        }
    }
   
    async getPosts(queries=[Query.equal("status","active")]){
        try {
           return await this.databases.listDocuments(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            queries,                 //here we also write  like that [Query.equal("status","active")] and remove from above
           
        ) 
            
        } catch (error) {
            return error
        }
    }

    // file upload service

    async uploadFile(file){
      try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
        
      } catch (error) {
        console.log("appwrite::uploadeservice::error::",error)
        return false
      }
    }
    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
            
        } catch (error) {
            console.log("appwrite::uploadeservice::error::",error);
            return false
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }



}

const service =new Service()
export default service
































