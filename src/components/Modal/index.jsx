import React from "react";
import { Box, Modal as MModal, Typography, Button } from "@mui/material";
import iconClose from "../../icons/sprite.svg";
import { IconClose } from "./Modal.styled";

const Modal = ({ children, isOpen, onClose, title }) => {
  return (
    <MModal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          width: 1,
          height: 1,
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#ffff",
            width: { xs: 1, md: 500 },
            mx: { xs: 2, md: 0 },
            display: "flex",
            items: "center",
            justifyContent: "space-between",
            borderRadius: 5,
            px: { xs: 1, md: 5 },
            py: 5,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: 2,
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {title}
            </Typography>
            <Button onClick={onClose}>
              <IconClose>
                <use href={iconClose + "#icon-close"}></use>
              </IconClose>
            </Button>
          </Box>
          <Box>{children}</Box>
        </Box>
      </Box>
    </MModal>
  );
};

export default Modal;
