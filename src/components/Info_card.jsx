import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const InfoCard = (props) => {
  const {imageURL = "https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg", content = "456789", title = "Tổng số đơn hàng" } = props;
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        alt="thống kê"
        height="160"
        image = {imageURL}
        sx ={{objectFit: "fill"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx ={{fontSize: 20}}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
