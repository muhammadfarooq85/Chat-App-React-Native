import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('685f6f5f001daea11380')   
  .setPlatform('com.nexchat');   

const account = new Account(client);

export { client, account, ID };
