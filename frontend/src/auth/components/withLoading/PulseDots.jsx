import { motion } from "motion/react"
import styled from '@emotion/styled';


const Dot = styled(motion.div)(({ theme }) => ({
    width: 20,
    height: 20,
    borderRadius: '50%',
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: 'white',
    willChange: 'transform',
}));

const Container = styled(motion.div)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
});

function LoadingThreeDotsPulse() {
    const dotVariants = {
        pulse: {
            scale: [1, 1.5, 1],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <Container
            animate="pulse"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        >
            <Dot variants={dotVariants} />
            <Dot variants={dotVariants} />
            <Dot variants={dotVariants} />
        </Container>
    );
}

export default LoadingThreeDotsPulse
