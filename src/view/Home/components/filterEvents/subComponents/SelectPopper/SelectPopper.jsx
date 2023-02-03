import { Grid, Grow, MenuList } from "@mui/material";
import { Stack } from "@mui/system";
import Popper from "@mui/material/Popper";

import { useRef } from "react";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ButtonFilter } from "../../../../style/StyleHome";
import useOnClickOutside from "../../../../../../hooks/useOnClickOutside";
import { useState } from "react";
import Select from "../../../../../../components/Select/Select";
import {
  BoxContainer,
  IconExpandButton,
  ItemMenu,
} from "../../styles/FilterEventsStyles";
import { TitleData } from "../../MockFilterHome";

export const SelectPopper = ({ Title, data }) => {
  const matchesWidth = useMediaQuery("(min-width:800px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const [values, setValues] = useState("");

  console.log(values);

  useEffect(() => { }, [values]);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useOnClickOutside(containerRef, () => setMenuOpen(false));

  const handleValueItem = (item) => {
    console.log(item);
  };
  return (
    <Stack margin={'5px'}>
      {matchesWidth ? (
        <>
          <ButtonFilter
            variant='contained'
            ref={containerRef}
            endIcon={<IconExpandButton />}
            onClick={handleMenuOpen}
          >
            {Title}
          </ButtonFilter>
          <Popper
            open={menuOpen}
            anchorEl={containerRef.current}
            role={undefined}
            placement='bottom-end'
            transition
            sx={{ zIndex: 1000, }}
            disablePortal
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: "right top",
                }}
              >
                <BoxContainer>


                  <MenuList
                    sx={{

                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {data.map((item, index) => (
                      <ItemMenu onClick={() => setValues(item)}>
                        {item.label}
                      </ItemMenu>
                    ))}
                  </MenuList>
                </BoxContainer>
              </Grow>
            )}
          </Popper>
        </>
      ) : (
        <Select
          title='Días de semana'
          type='text'
          data={data}
          id='modality_event'
          required
        />
      )}
    </Stack>
  );
};
