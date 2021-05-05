import { styled } from '@material-ui/styles';

const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: '#FFF',
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  }),
);

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
});

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const MainLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

export const MainLayout = () => (
  <MainLayoutRoot>
    <MainLayoutWrapper>
      <MainLayoutContainer>
        <MainLayoutContent>
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);