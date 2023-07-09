import { Autocomplete, Container } from '@mantine/core';
import React from 'react';

const demo = () => {
    return (
        <div>
            <Container size="xs" px="xs">
                <Autocomplete
                    label="Your favorite framework/library"
                    placeholder="Pick one"
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                />
            </Container>
        </div>
    );
}

export default demo;