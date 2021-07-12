import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';

const Cart = () => {
    const isEmpty = true;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You do not have any items in the cart. Let's get you some treats!</Typography>
    );
    const FilledCart = () => (
        <>
        <Grid>
            
        </Grid>
        </>
    );
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Cart</Typography>/>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>

    )
}

export default Cart
