package com.H2O.backend.hospital;

import com.H2O.backend.util.jpaService.JpaService;
import org.springframework.stereotype.Service;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Optional;


interface HospitalService extends JpaService<Hospital> {

    public void readCsv();
}

@Service
public class HospitalServiceImpl implements HospitalService {

    private final HospitalRepository repository;

    public HospitalServiceImpl(HospitalRepository repository) {
        this.repository = repository;
    }

    @Override
    public Optional<Hospital> findById(String id) {
        return Optional.empty();
    }

    @Override
    public Iterable<Hospital> findAll() {
        return null;
    }

    @Override
    public int count() {
        return 0;
    }

    @Override
    public void delete(String id) {

    }

    @Override
    public boolean exists(String id) {
        return false;
    }

    @Override
    public void readCsv() {
        InputStream is = getClass().getResourceAsStream("/static/csv/hospital.csv");

        try {
            BufferedReader fileReader = new BufferedReader(new InputStreamReader(is,"UTF-8"));
            CSVParser csvParser = new CSVParser(fileReader, CSVFormat.DEFAULT);
            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            for(CSVRecord csvRecord : csvRecords){
                //Business status 1
                //Tel 2
                //Addr 3
                //Hospital_Name 4
                //Latitude 5
                //Longitude 6
                //HospitalType 7
                //MedicalPeople 8
                //HospitalRoom 9
                //HospitalBed 10
                //HospitalArea 11
                //TypeDetail 12
                System.out.println(csvRecord.get(0));
                System.out.println(csvRecord.get(1));
                System.out.println(csvRecord.get(2));
                System.out.println(csvRecord.get(3));
                System.out.println(csvRecord.get(4));
                System.out.println(csvRecord.get(5));
                System.out.println(csvRecord.get(6));
                System.out.println(csvRecord.get(7));
                System.out.println(csvRecord.get(8));
                System.out.println(csvRecord.get(9));
                System.out.println(csvRecord.get(10));
                repository.save(new Hospital(
                        csvRecord.get(0),
                        csvRecord.get(1),
                        csvRecord.get(2),
                        csvRecord.get(3),
                        csvRecord.get(4),
                        csvRecord.get(5),
                        csvRecord.get(6),
                        Integer.parseInt(csvRecord.get(7)),
                        Integer.parseInt(csvRecord.get(8)),
                        Integer.parseInt(csvRecord.get(9)),
                        csvRecord.get(10),
                        csvRecord.get(11)));

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}