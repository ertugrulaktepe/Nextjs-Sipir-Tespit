import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MOTOR_BY_ID } from "../../graphql/queries/get-motor-by-id";
import { UPDATE_MOTOR } from "../../graphql/queries/update-motors";
import { Spinner } from "reactstrap";
import moment from "moment";

type Motors = {
  brand: string;
  kw: string;
  motor_akimi: string;
  devir: string;
  created_at: string;
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
  id: number;
  customer: string;
  hp: string;
};
type FormData = {
  sipirDetails: {
    brand: string;
    kw: string;
    motor_akimi: string;
    devir: string;
    created_at: string;
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
    id: number;
  };
};

const details = () => {
  const router = useRouter();
  const [motors, setMotors] = useState({} as Motors);
  const [isDisabled, setIsDisabled] = useState(true);

  const [updateMotors, { data: motorsData, loading: updateLoading }] =
    useMutation(UPDATE_MOTOR, {
      onCompleted: (motorsData) => {
        alert("Motor Güncellendi");
        
      },
      fetchPolicy: "no-cache",
    });

  const { data, error, loading } = useQuery(GET_MOTOR_BY_ID, {
    variables: { id: Number(router.query.id) },
    onCompleted: (data) => {
      setMotors(data.motors_by_pk);
    },
  });

 

  const { register, handleSubmit, setValue } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      sipirDetails: {
        brand: motors?.brand,
        kw: motors.kw,
        motor_akimi: motors.motor_akimi,
        devir: motors.devir,
        created_at: motors.created_at,
        baglanti: motors.baglanti,
        description: motors.description,
        rotor_capi: motors.rotor_capi,
        rulman_no: motors.rulman_no,
        sac_boyu: motors.sac_boyu,
        saran: motors.saran,
        sargi_status: motors.sargi_status,
        hatve: motors.hatve,
        seri_no: motors.seri_no,
        sipir: motors.sipir,
        soken: motors.soken,
        tel_adet: motors.tel_adet,
        tel_capi: motors.tel_capi,
        voltaj: motors.voltaj,
        ankus_sayisi: motors.ankus_sayisi,
        total_tel: motors.total_tel,
        customer: motors.customer,
        hp: motors.hp,
        id: motors.id,
      },
    },
  });

  useEffect(() => {});
  if (loading)
    return (
      <Spinner
        color="info"
        type="grow"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  if (error) return <p>Error...</p>;
  setValue("sipirDetails", motors);

  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between text-dark">
          <span className="text-dark fw-bolder">
            {isDisabled ? "Sipir Detayları" : "Sipir Güncelleme"}
          </span>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                setIsDisabled(!isDisabled);
              }}
            >
             {isDisabled ? "Sipir Güncelle":"İptal Et"}
            </button>
          </div>
        </div>
        <div className="card-body">
          <form
            onSubmit={handleSubmit((motorsData) => {
              updateMotors({
                variables: motorsData.sipirDetails,
              });
            })}
          >
            <div className="row">
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">FİRMA</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.customer")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">MARKA</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.brand")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">MOTOR AKIMI</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.motor_akimi")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">MOTOR DEVRİ</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.devir")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">MOTOR KW</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.kw")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">TARİH</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.created_at")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">MOTOR HP</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.hp")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">ROTOR ÇAPI</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.rotor_capi")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">RULMAN NO</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.rulman_no")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">SAC BOYU</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.sac_boyu")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">SARAN</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.saran")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">SARGI TİPİ</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.sargi_status")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">HATVE</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.hatve")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">SERİ NO</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.seri_no")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">SİPİR</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.sipir")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">SÖKEN</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.soken")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">TEL ADEDİ</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.tel_adet")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">TEL ÇAPI</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.tel_capi")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">VOLTAJ</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.voltaj")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">ANKUŞ SAYISI</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.ankus_sayisi")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">YEDİĞİ TEL</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.total_tel")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">BAĞLANTI</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.baglanti")}
                  type="text"
                />
              </div>
              <div className="col-lg-3 mt-4">
                <label className="form-label fw-bolder">AÇIKLAMA</label>
                <input
                  disabled={isDisabled}
                  className="form-control"
                  {...register("sipirDetails.description")}
                  type="text"
                />
              </div>
            </div>
            <div className="card-footer mt-3 d-flex justify-content-end">
              <button className="btn btn-success" disabled={isDisabled}>
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default details;
