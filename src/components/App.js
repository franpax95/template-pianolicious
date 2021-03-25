import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import { useInnerWidth } from 'hooks/useInnerWidth';
import { sleep } from 'utils';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import Gallery from 'pages/Gallery';
import Contact from 'pages/Contact';


const StyledApp = styled(animated.div)`
    width: 100%;
    min-height: 80vh;
    min-height: calc(90vh - 150px);
`;

function App() {
    const [contentHeight, setContentHeight] = useState(undefined);
    const width = useInnerWidth();
    const ref = useRef();
    const location = useLocation();

    const transitions = useTransition(location, location => location.pathname, {
        from: { position: "absolute", opacity: 0 },
        enter: item => async next => {
            await sleep(600);
            await next({ opacity: 1 });
        },
        leave: { opacity: 0 },
        config: { duration: 150 }
    });

    useEffect(() => {
        setContentHeight(ref.current.clientHeight);
    }, [location, width]);

    return (
        <Layout height={contentHeight}>
            {transitions.map(({ item, props, key }) => (
                <StyledApp key={key} style={{ ...props }} ref={ref}>
                    <Switch location={item}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </StyledApp>
            ))}
        </Layout>
    );
}

export default App;
