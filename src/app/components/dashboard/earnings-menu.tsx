import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  export function MenubarDemo() {
    return (
      <div className="text-[#8F8F8F]"  >
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>2024</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              2023
            </MenubarItem>
            <MenubarItem>
              2022 
            </MenubarItem>
            <MenubarItem >
                2021
            </MenubarItem>
            <MenubarSub>
              <MenubarItem>2020</MenubarItem>
            </MenubarSub>
            <MenubarItem>
              2019
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Jan</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              2023
            </MenubarItem>
            <MenubarItem>
              2022 
            </MenubarItem>
            <MenubarItem >
                2021
            </MenubarItem>
            <MenubarSub>
              <MenubarItem>2020</MenubarItem>
            </MenubarSub>
            <MenubarItem>
              2019
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Week 1</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              2023
            </MenubarItem>
            <MenubarItem>
              2022 
            </MenubarItem>
            <MenubarItem >
                2021
            </MenubarItem>
            <MenubarSub>
              <MenubarItem>2020</MenubarItem>
            </MenubarSub>
            <MenubarItem>
              2019
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {/* <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu> */}
      </Menubar>
      </div>
    )
  }
  