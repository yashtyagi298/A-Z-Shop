
import { Link, NavLink } from "react-router-dom"
import { Button } from "./button";
import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, ShoppingCartIcon, SquareMenu, Sun, User, Utensils, UtensilsCrossed } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./menubar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { Separator } from "./separator";


const Navbar = () => {
    const admin = true;
    const loading = false;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14  pl-3">
                <Link to="/">
                    <h1 className="font-bold md:font-extrabold text-2xl">EazyEats</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-7">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/order/status">Order</NavLink>
                    </div>
                    {admin && (
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>
                                    Dashboard
                                </MenubarTrigger>
                                <MenubarContent>
                                    <Link to="/admin/restaurant"><MenubarItem>Restaurant</MenubarItem></Link>
                                    <Link to="/admin/menu"><MenubarItem>Menu</MenubarItem></Link>
                                    <Link to="/admin/order"><MenubarItem>Order</MenubarItem></Link>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    )}

                    <div className="flex items-center gap-4">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem >
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem >
                                        Dark
                                    </DropdownMenuItem>

                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                        <Link to="/cart" className="relative cursor-pointer">
                            <ShoppingCart />
                            <Button size={"icon"} className="absolute -inset-y-3 left-2 text-xs rounded-full bg-red-500 h-4 w-4">5</Button>
                        </Link>
                        <div>
                            <Avatar>
                                <AvatarImage />
                                <AvatarFallback>YT</AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            {
                                loading ? (
                                    <Button className="bg-orange hover:bg-hoverOrange">
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button className="bg-orange hover:bg-hoverOrange">Logout</Button>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="md:hidden lg:hidden pr-2">
                    {/* Mobile responsive */}
                    <MobileNavbar></MobileNavbar>
                </div>
            </div>

        </div>
    )
}

export default Navbar

const MobileNavbar = () => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={'icon'} className="rounded-full bg-gray-200 hover:bg-gray-400" variant="outline"><Menu size={'18'} /></Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-2">
                    <SheetTitle>EazyEats</SheetTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem >
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem >
                                Dark
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetHeader>
                <Separator className="my-2" />
                <SheetDescription className="flex-1">
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <User />
                        <span>Profile </span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <HandPlatter />
                        <span>Order </span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <ShoppingCartIcon />
                        <span>Cart (0) </span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <SquareMenu />
                        <span>Menu</span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <UtensilsCrossed />
                        <span>Restaurant </span>
                    </Link>
                    <Link to="/profile" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <PackageCheck />
                        <span>Restaurant Orders </span>
                    </Link>

                </SheetDescription>
                <SheetFooter className="flex flex-col gap-4">


                <SheetClose asChild>
                        <Button type="submit" className="bg-orange hover:bg-hoverOrange">Logout</Button>
                    </SheetClose>

                    <div className="flex flex-row items-center gap-2">
                        <Avatar>
                            <AvatarImage></AvatarImage>
                            <AvatarFallback>YT</AvatarFallback>
                        </Avatar>
                        <h1 className="font-bold text-base">Yash Tyagi</h1>
                    </div>



                  


                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}