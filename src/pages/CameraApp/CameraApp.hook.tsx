import { useState } from "react";
import { usePhotoGallery } from "../../hook/useCamera";

export const useCameraHook = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return {
    photos,
    takePhoto,
  };
};
