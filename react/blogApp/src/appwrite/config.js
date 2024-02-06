import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {

    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

            this.database = new Databases(this.client);
            this.bucket = new Storage(this.client); 
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            ) 

        } catch(error) {
            console.log("Appwrite service :: createPost :: error " + error); 
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error ", error); 
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
            );
            return true; 
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error"); 
            return false; 
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            ); 
        } catch(error) {
            console.log("Appwrite service :: getPost :: error"); 
            return false; 
        }
    }

    async getPosts( queery = [Query.equal("status", "active")]) {
        try {
            return this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queery,
            );
        } catch(error) {
            console.log("Appwrite service :: getPosts :: error"); 
            return false; 
        }
    }

    // ++++++ File upload service +++++++

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique,
                file,
            ); 
        } catch(error) {
            console.log("Appwrite service :: uploadFile :: error"); 
            return false; 
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            ) 
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error"); 
        }
    }

    async getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error"); 
        }
    }
}

const service = new Service();
export default service; 
