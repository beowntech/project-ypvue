<script>
    import axios from 'axios'
    import apiUrls from "../_helpers/apiUrls";

    class UploadFilesService {
        upload(file, onUploadProgress) {
            let formData = new FormData();

            formData.append("file", file);

            return axios.post(apiUrls.uploadGallery, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress
            });
        }

        getFiles() {
            return axios.get("/files");
        }
    }
    export default new UploadFilesService();
</script>