import React from 'react';
import { Container } from 'react-bootstrap';

export const Dashboard = () => {
    return (
        <div>
            <Container className="dashboard-tile">
                <img src="../test-app/writing.jpg" width="50%" alt="card" />
                <div className="dashboard-description">
                    For most people, writing in a diary may seem old school or not relevant, 
                    however what most people cannot understand is how important and helpful journaling is.
                    <br/><br/>
                    Writing in a diary may seem absurd or even boring to you. But trust me when I say that concentrating on 
                    your thoughts and putting down everything on paper makes room for self-learning and helps think through 
                    everything better. Amongst the busy schedules everyone has, finding time for yourself to just sit, 
                    breathe and relax is hard. Spending 10 minutes a day just pouring out everything makes anyone feel better.
                    <br/><br/>
                    In the age of digital media where everything became online then why not our daily dairy ? So here we are presenting
                    a secret <b>My Daily Dairy</b> to quickly write down your daily fun, experience, poems, your paintings and much more along with your daily online work.
                </div>
            </Container>
        </div>
    );
}