# filemetadata-microservice

## Objective

- [x] Build a full stack JavaScript app that is functionally similar to this: <https://purple-paladin.glitch.me/>. Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

## User stories:

1. I can submit a `form` that includes a `file` upload.
2. The form file input field has the `"name"` attribute set to `"upfile"`. We rely on this in testing.
3. When I submit something, I will receive the file name and size in bytes within the JSON response.

- **Hint:** To handle the file uploading you should use the [multer](https://www.npmjs.com/package/multer) npm package.

## Usage:

- Go to main [page](https://file-metadata-microservice.now.sh/), and upload a file using the provided form.

### Example output:

- {"name": "example.txt", "type": "text/plain", "size": 145}
