import { useMutation, useQuery } from "@apollo/client";
import { GET_MOTORS } from "../../graphql/queries/get-motors";
import { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button, Spinner } from "reactstrap";
import Modals from "../../component/modal";
import { INSERT_MOTOR } from "../../graphql/queries/insert-motor";

type FormValues = {
  brand: string;
  kw: string;
  motor_akimi: string;
  devir: string;
  baglanti: string;
  description: string;
  rotor_capi: string;
  rulman_no: string;
  sac_boyu: string;
  saran: string;
  sargi_status: string;
  hatve: string;
  seri_no: string;
  sipir: string;
  soken: string;
  tel_adet: string;
  tel_capi: string;
  voltaj: string;
  ankus_sayisi: string;
  total_tel: string;
  customer: string;
  hp: string;
};

const Motors = () => {
  const [motors, setMotors] = useState<any>([]);
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const [addMotors, { data: motorsData }] = useMutation<any>(INSERT_MOTOR, {
    onCompleted: (motorsData) => {
      setModal(false);
      setMotors([motorsData.insert_motors_one, ...motors]);
    },
    fetchPolicy: "no-cache",
  });

  const { data, loading, error } = useQuery(GET_MOTORS, {
    onCompleted: (data) => {
      setMotors(data.motors);
    },
  });
  if (loading)
    return (
      <Spinner
        color="info"
        type="grow"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  if (error) return <p>Error :</p>;

  const columns = [
    {
      name: "customer",
      label: "FİRMA",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "brand",
      label: "MOTOR MARKASI",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "kw",
      label: "MOTOR KW",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "motor_akimi",
      label: "MOTOR AKIMI",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "devir",
      label: "MOTOR DEVRİ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "created_at",
      label: "TARİH",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "id",
      label: "İŞLEMLER",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (id: any) => {
          return (
            <button
              className="btn btn-primary"
              onClick={() => {
                router.push({
                  pathname: "/details/[id]",
                  query: { id },
                });
              }}
            >
              Düzenle
            </button>
          );
        },
      },
    },
  ];

  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <span>TEKSTART ELEKTRİK SİPİR TESPİT UYGULAMASI</span>
          <div className="card-actions">
            <Button onClick={() => setModal(true)} className="btn btn-success">
              Sipir Ekle
            </Button>
            <Modals title="Ürün Ekle" modal={modal} setModal={setModal}>
              <form
                className="form-group"
                onSubmit={handleSubmit((motorsData) => {
                  console.log(motorsData);

                  addMotors({ variables: motorsData });
                })}
              >
                <div className="form-control">
                  <label className="form-label fw-bolder">FİRMA</label>
                  <input
                    className="form-control"
                    {...register("customer")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">MARKA</label>
                  <input
                    className="form-control"
                    {...register("brand")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">MOTOR AKIMI</label>
                  <input
                    className="form-control"
                    {...register("motor_akimi")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">MOTOR DEVRİ</label>
                  <input
                    className="form-control"
                    {...register("devir")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">MOTOR KW</label>
                  <input
                    className="form-control"
                    {...register("kw")}
                    type="text"
                  />
                </div>

                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">MOTOR HP</label>
                  <input
                    className="form-control"
                    {...register("hp")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">ROTOR ÇAPI</label>
                  <input
                    className="form-control"
                    {...register("rotor_capi")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">RULMAN NO</label>
                  <input
                    className="form-control"
                    {...register("rulman_no")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">SAC BOYU</label>
                  <input
                    className="form-control"
                    {...register("sac_boyu")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">SARAN</label>
                  <input
                    className="form-control"
                    {...register("saran")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">SARGI TİPİ</label>
                  <input
                    className="form-control"
                    {...register("sargi_status")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">HATVE</label>
                  <input
                    className="form-control"
                    {...register("hatve")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">SERİ NO</label>
                  <input
                    className="form-control"
                    {...register("seri_no")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">SİPİR</label>
                  <input
                    className="form-control"
                    {...register("sipir")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">BAĞLANTI</label>
                  <input
                    className="form-control"
                    {...register("baglanti")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">SÖKEN</label>
                  <input
                    className="form-control"
                    {...register("soken")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">TEL ADEDİ</label>
                  <input
                    className="form-control"
                    {...register("tel_adet")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">TEL ÇAPI</label>
                  <input
                    className="form-control"
                    {...register("tel_capi")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">VOLTAJ</label>
                  <input
                    className="form-control"
                    {...register("voltaj")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">ANKUŞ SAYISI</label>
                  <input
                    className="form-control"
                    {...register("ankus_sayisi")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">YEDİĞİ TEL</label>
                  <input
                    className="form-control"
                    {...register("total_tel")}
                    type="text"
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="form-label fw-bolder">AÇIKLAMA</label>
                  <input
                    className="form-control"
                    {...register("description")}
                    type="text"
                  />
                </div>
                <div className="modal-footer">
                  <Button type="submit" className="btn btn-success">
                    Kaydet
                  </Button>
                  <Button
                    onClick={() => {
                      setModal(false);
                    }}
                    type="button"
                    className="btn btn-success"
                  >
                    Kapat
                  </Button>
                </div>
              </form>
            </Modals>
          </div>
        </div>
        <div className="card-body">
          <MUIDataTable
            title={"Sipir Tespit Listesi"}
            data={motors}
            columns={columns}
            options={{
              textLabels: {
                body: {
                  noMatch: "Kayıtlar Getiriliyor",
                },
                pagination: {
                  next: "Sonraki Sayfa",
                  previous: "Önceki Sayfa",
                  rowsPerPage: "Sayfa başına satır:",
                },
                toolbar: {
                  search: "Arama",
                  viewColumns: "Sütunları Görüntüle",
                  filterTable: "Tabloyu Filtrele",
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Motors;
