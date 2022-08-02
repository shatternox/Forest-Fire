import React from "react";

import classes from './Home.module.css';

const Home = () => {

    return (
        <div>

            <marquee className={classes.marquee} scrollamount="20">SAVE ORANG UTAN! <a href="/donation" className={classes.a}>DONATE NOW!</a></marquee>

            <video width="80%" autoPlay controls className={`${classes.video} me-auto mx-auto d-block`}>
                <source src="/assets/videos/video-home.mp4"/>
            </video>

            <p className={classes.p}>
            Kabut asap akibat kebakaran hutan dan lahan di sejumlah kawasan di Kalimantan Barat, membuat fasilitas kesehatan di Kota Pontianak ramai didatangi penderita infeksi saluran pernapasan akut (ISPA). "Ada peningkatan jumlah kunjungan dengan keluhan ISPA," kata Kepala Puskesmas Kampung Bali Pontianak drg Popong Solihat, Kamis (4/3/2021). Dia menjelaskan peningkatan jumlah kunjungan masyarakat dengan keluhan ISPA karena dalam dua pekan terakhir kualitas udara di Kota Pontianak dan sekitarnya mulai memburuk karena semakin tebalnya kabut asap kebakaran hutan. "Dalam sehari kami bisa melayani sekitar 50 hingga 70 pasien dengan keluhan batuk dan sesak napas akibat kabut asap dampak Karhutla," ungkapnya. Dia menambahkan rata-rata yang mengeluhkan sesak napas dan batuk akibat kabut asap dari kalangan orang dewasa. "Jumlah tersebut adalah yang tercatat secara resmi, mungkin yang tidak dibawa ke Puskemas jumlahnya lebih banyak lagi," katanya. Kepala Puskesmas Kampung Bali mengimbau kepada masyarakat agar selalu menggunakan masker apabila ke luar rumah, dan mengurangi aktivitas di luar rumah apabila memang tidak perlu. Sebelumnya, Wali Kota Pontianak, Edi Rusdi Kamtono mengimbau masyarakat agar mengurangi aktivitas di luar rumah karena saat ini kualitas udara di kota itu mulai memburuk dan membahayakan bagi kesehatan akibat asap dari kebakaran hutan dan lahan. "Melihat kondisi udara yang demikian, kami minta masyarakat tetap menggunakan masker apabila keluar rumah dan mengurangi aktivitas di luar rumah," katanya. Saat ini pihaknya bersama TNI/Polri beserta petugas pemadam kebakaran swasta berupaya memadamkan api pada titik-titik wilayah yang terjadi kebakaran lahan. Hal ini bertujuan untuk mengurangi asap yang kian tebal dan mempengaruhi kualitas udara. Edi menambahkan status Kota Pontianak saat ini sudah masuk darurat asap sehingga perlu melakukan penanganan darurat terhadap kebakaran lahan. Penanganan kebakaran lahan sebagian sudah diatasi, namun hal ini tidak bisa hanya sesaat tetapi harus secara sporadis. "Hanya hujan yang bisa efektif memadamkan api secara total, tetapi hujannya harus deras, kalau hujan tidak deras, tidak terlalu signifikan," ungkap Edi.
            </p>
        </div>
    );
};

export default Home;









