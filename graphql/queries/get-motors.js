import { gql } from "@apollo/client"
export const GET_MOTORS = gql`
query MyQuery {
  motors(order_by: {id: desc}) {
    ankus_sayisi
    baglanti
    brand
    created_at
    customer
    description
    devir
    hatve
    hp
    id
    kw
    motor_akimi
    rotor_capi
    rulman_no
    sac_boyu
    saran
    sargi_status
    seri_no
    sipir
    soken
    tel_adet
    tel_capi
    total_tel
    voltaj
  }
}
  
`