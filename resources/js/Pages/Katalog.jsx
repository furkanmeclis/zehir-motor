import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Button} from "primereact/button";
import React, {useEffect, useRef, useState} from 'react';
import 'primereact/resources/primereact.css';
import Catalog from "@/Components/Catalog.jsx";
import {Head, router} from "@inertiajs/react";
import {BlockUI} from "primereact/blockui";
import {InputOtp} from 'primereact/inputotp';
import {useLocalStorage} from "primereact/hooks";
import {getCatalogProducts} from "@/helpers/helper.js";
import {Toast} from "primereact/toast";
import LandingNavbar from "@/Components/LandingNavbar.jsx";
import LandingFooter from "@/Components/LandingFooter.jsx";

const Katalog = ({categories, phoneNumber, password, csrf_token}) => {
    const toast = useRef(null);
    const [loading, setLoading] = useState(true);
    const [productsAll, setProductsAll] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);
    const [logined, setLogined] = useLocalStorage(false, 'loginedCatalogForCkyMoto');
    useEffect(() => {
        getCatalogProducts(csrf_token).then(({status, data}) => {
            if (status) {
                setProductsAll(data);
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Hata',
                    detail: 'Ürünler yüklenirken bir hata oluştu.',
                    life: 3000
                });
            }
        }).catch((err) => {
            console.error(err);
            toast.current.show({
                severity: 'error',
                summary: 'Hata',
                detail: 'Ürünler yüklenirken bir hata oluştu.',
                life: 3000
            });
        }).finally(() => {
            setLoading(false);

        })
    }, []);
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Toast ref={toast}/>
            <Head title="Katalog"/>
            <LandingNavbar />
            <BlockUI blocked={loading} fullScreen
                     template={<i className="pi pi-spin pi-spinner" style={{fontSize: '3rem'}}></i>}>
                <div className={"mt-[-2px]"}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded">
                                <Catalog productsAll={productsAll} categories={categories} cartVisible={cartVisible}
                                         setCartVisible={setCartVisible} phoneNumber={phoneNumber}/>

                        </div>
                    </div>
                </div>
                <Button icon={"pi pi-shopping-cart"}
                        onClick={() => {
                            setCartVisible(true);
                        }}
                        rounded className={"fixed bottom-4 right-4"} tooltip={"Sepeti Görüntüle"} tooltipOptions={{
                    position:"left"
                }} />
            </BlockUI>
            <LandingFooter/>
        </div>
    );
}
export default Katalog;
