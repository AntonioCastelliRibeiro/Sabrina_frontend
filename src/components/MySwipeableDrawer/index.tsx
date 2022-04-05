import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { Box, Stack, useTheme, CssBaseline, SwipeableDrawer, useMediaQuery } from "@mui/material";
import { IMySwipeableDrawer } from './interface';
import { useNavigate } from 'react-router-dom';
import { ContainerComp, ContentButton, ContentPuller, Puller, Root } from './styles';
import { MyButton } from '../MyButton/styles';
import { pages } from '../MyNavbar/data';

const drawerBleeding = 56;

export default function MySwipeableDrawer(props: IMySwipeableDrawer) {
  const theme = useTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    props.setCloseModal();
  }, [matches])

  const toggleDrawer = (APath: string) => () => {
    setTimeout(() => {
      navigate(APath);
      props.setCloseModal();
    }, 300);
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `180px`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        elevation={20}
        anchor="bottom"
        open={props.openModal}
        onClose={() => props.setCloseModal()}
        onOpen={() => false}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <ContainerComp theme={theme}>
          <ContentPuller theme={theme} openModal={props.openModal} >
            <Puller />
            <Box p={4} />
          </ContentPuller>
          <ContentButton theme={theme}  >
            <Stack spacing={1.3} width="100%" >
              {pages.map((data, key) => (
                <Stack key={key}>
                  <MyButton
                    theme={theme}
                    sx={{ fontSize: { 
                      xs: theme.typography.body2.fontSize, 
                      sm: theme.typography.body1.fontSize, 
                      md: theme.typography.body1.fontSize, 
                  } }}
                    key={data.page}
                    onClick={toggleDrawer(data.router)}
                    bgcolorselect={theme.palette.primary.dark}
                    bgcolorhover={theme.palette.secondary.main}
                    colortypo={theme.palette.secondary.main}
                    colorhover={theme.palette.primary.dark}
                    fontweighthover={0}
                    myfontweight={0}
                    size="large"
                    startIcon={data.icon}
                    variant="contained"
                    children={data.page}
                    disableElevation
                  />
                </Stack>
              ))}
            </Stack>
          </ContentButton>
        </ContainerComp>
      </SwipeableDrawer>
    </Root>
  );
}
