"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PortfolioCard(params:any) {
    const {title, techList, company, description, link, key} = params;
    return (
      <Card className="card" key={key}>
      <CardContent>
        <Typography className='company-tag' variant="body2" sx={{ color: 'text.secondary' }}>
          {company}
        </Typography>
        <Typography className="card-title" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <div className="tech">
        {techList.map((tech:string, i:string) => (<div key={i}>{tech}</div>))}
        </div>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="link">
            <a target="_blank" href={link} rel="noopener noreferrer">View</a>
        </div>
      </CardActions>
    </Card>
    )
}
function EducationCard(params:any){
  const {title, school, date, key} = params;
    return (
      <Card className="card" key={key}>
      <CardContent>
        <Typography className="card-title" gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {school}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {date}
        </Typography>
      </CardContent>
    </Card>
    )

}
export {EducationCard, PortfolioCard}