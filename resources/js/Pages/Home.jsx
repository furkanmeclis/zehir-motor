import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import React, {useEffect, useState} from "react";
import {Toast} from "primereact/toast";
import {ProgressBar} from "primereact/progressbar";
import {Chip} from "primereact/chip";
import {Tag} from "primereact/tag";
import {BlockUI} from "primereact/blockui";
import {getStatsData} from "@/helpers/helper.js";

export default function Home({auth, csrf_token}) {
    const [loading, setLoading] = React.useState(true);
    const [counts, setCounts] = React.useState(null);
    const [password, setPassword] = React.useState("");
    const toast = React.useRef(null);
    useEffect(() => {
        getStatsData(csrf_token).then(({status, data}) => {
            if (status) {
                setCounts(data.counts);
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Hata',
                    detail: 'Veriler yüklenirken bir hata oluştu.',
                    life: 3000
                });
            }
        }).catch(err => {
            console.error(err);
            toast.current.show({
                severity: 'error',
                summary: 'Hata',
                detail: 'Veriler yüklenirken bir hata oluştu.',
                life: 3000
            });
        }).finally(() => {
            setLoading(false);

        })
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Anasayfa"}

        >
            <Head title={"Anasayfa"}/>
            <Toast ref={toast}/>
            <div className="py-6">
                <div className="max-w-[85rem] mx-auto sm:px-6 lg:px-8">
                    <BlockUI blocked={loading}
                             template={<i className="pi pi-spin pi-spinner" style={{fontSize: '3rem'}}></i>}>
                        {!loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <Card title={"Ürünler"}
                                  subTitle={<><i className="pi pi-box"></i> {counts.products} Adet Ürün</>}>
                                <div className={"flex justify-between gap-x-2"}>
                                    <Button label="Yeni Ürün Ekle" icon="pi pi-plus-circle" size={"small"}
                                            onClick={() => router.visit(route('products.index'))}
                                            className="p-button-success"/>
                                    <Button label="Ürünler" icon="pi pi-box"
                                            onClick={() => router.visit(route('products.index'))} size={"small"}
                                            className="p-button-info"/>
                                </div>
                            </Card>
                            <Card title={"Katalog"}
                                  subTitle={<>Tanıtım Kataloğu</>}>
                                <div className={"flex justify-between gap-x-2"}>
                                    <Button label="Katalog(Firma İçi)" icon="pi pi-images" size={"small"}
                                            onClick={() => router.visit(route('products.katalog'))}
                                            className="p-button-success"/>
                                    <Button label="Katalog" icon="pi pi-external-link"
                                            onClick={() => router.visit(route('home'))} size={"small"}
                                            className="p-button-info"/>
                                </div>
                            </Card>
                        </div>}
                    </BlockUI>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}