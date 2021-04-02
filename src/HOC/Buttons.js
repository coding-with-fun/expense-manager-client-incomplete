import { Button } from "@material-ui/core";

export const FilledButton = ({ title, name }) => {
    return (
        <Button
            variant="contained"
            className={`hoc-contained-button hoc-${name}-button`}
            disableElevation
        >
            {title}
        </Button>
    );
};

export const OutlinedButton = ({ title, name }) => {
    return (
        <Button
            variant="outlined"
            className={`hoc-outlined-button hoc-${name}-button`}
            disableElevation
        >
            {title}
        </Button>
    );
};
