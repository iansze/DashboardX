import { Typography, Box, useTheme } from "@mui/material";
import { colorDesign } from "./Theme";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  const theme = useTheme();
  const colors = colorDesign(theme.palette.mode);
  return (
    <Box>
      <Typography variant="h1" color={colors.grey[100]}>
        {title}
      </Typography>
      <Typography variant="h3" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
