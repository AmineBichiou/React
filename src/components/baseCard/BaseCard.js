import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = (props) => {
  return (
    <div >
    <Card style={{ position:'fixed' ,left:'18%', width:'80%' , height:'80%'}}>
      <Box p={4} display="flex"  alignItems="center">
        <Typography variant="h4">{props.title}</Typography>
      </Box>
      <CardContent>{props.children}</CardContent>
    </Card>
    </div>
  );
};

export default BaseCard;
