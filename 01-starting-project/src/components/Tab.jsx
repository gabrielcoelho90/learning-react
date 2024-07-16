export default function Tab({children, buttons, ButtonsWrapper = 'menu'}){
  return (
    <>
      <ButtonsWrapper>
        {buttons}
      </ButtonsWrapper>
      {children}
    </>
  );

}
