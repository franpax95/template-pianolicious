import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import Gallery from 'pages/Gallery';

const StyledApp = styled(animated.div)`
    width: 100%;
`;

function App(props) {
    const location = useLocation();
    console.log(location);

    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, position: 'absolute' },
        update: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    console.log(transitions);

    return (
        <Layout>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/gallery" component={Gallery} />
                    </Switch>
                </animated.div>
            ))}
        </Layout>
    );
}

export default App;