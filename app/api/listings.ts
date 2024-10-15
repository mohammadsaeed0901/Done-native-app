import { type IListing } from "../screens/ListingsScreen";
import api from "./client";

const endpoint = "/listings";

const getListings = () => api.get<IListing[]>(endpoint);

const addListing = async (listing: any, onUploadProgress: ((progress: number) => void)) => {
    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price.toString());
    data.append("categoryId", listing.category.value);
    data.append("description", listing.description || "");
    
    // await Promise.all(listing.images.map(async (image, index) => {
    //     const response = await fetch(image);
    //     const blob = await response.blob();
    //     data.append("images", {
    //         name: "image" + index + ".jpg",
    //         type: "image/jpeg",
    //         uri: image,
    //     } as any);
    // }));

    listing.images.forEach((image, index) => {
        data.append("images", {
            name: `image${index}.jpg`, // Ensure you have a valid name and extension
            type: "image/jpeg", // Ensure the correct MIME type
            uri: image, // Use the correct field from the image object
        });
    });

    if (listing.location)
        data.append("location", JSON.stringify(listing.location));

    return api.post(endpoint, data, {
        onUploadProgress: progress => onUploadProgress(progress.loaded / progress.total!)
    });
}

export default {
    getListings,
    addListing,
}