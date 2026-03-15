import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
    return (
        <Container className="">
            <h2 className="bg-bazar-light-pink">Home</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                pariatur qui, nostrum placeat quia a est, labore accusamus
                earum, veniam itaque id magnam sunt odit minima blanditiis
                tempora maiores beatae molestias. Nemo neque distinctio ipsa
                nam, laborum omnis! Ut in quaerat amet quo aspernatur sint
                voluptate nemo, cumque sunt nobis?
            </p>
            <Button variant="default" size="lg">
                Checkout
            </Button>
        </Container>
    );
};

export default Home;
