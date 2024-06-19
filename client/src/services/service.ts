import "dotenv/config";
import axios from "axios";
import { z } from "zod";
const backendBaseUrl = import.meta.env.BACKEND_BASE_URL;

const uploadSuccessSchema = z.object({
  message: z.string(),
});

export async function uploadFile(formData: FormData) {
  const result = await axios(backendBaseUrl + "/api/upload", {
    method: "POST",
    data: formData,
  });
  return uploadSuccessSchema.parse(result.data);
}
