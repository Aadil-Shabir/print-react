import React, { useContext } from "react";
import {
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  CloseButton,
  Grid,
  GridItem,
  Box,
  useColorModeValue,
  Center,
  Image,
} from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalContext";
import moment from "moment";
import { intervalToDuration } from "date-fns";
import { AttachmentIcon } from "@chakra-ui/icons";

const ViewReport = React.forwardRef(
  (
    {
      _id,
      wellType,
      wellName,
      reportDate,
      submittedBy,
      company,
      field,
      fluid,
      environment,
      status,
      completion,
      wellProfile,
      dateDrilled,
      units,
      originalElevation,
      latitude,
      longitude,
      wellRemarks,
      jobDescription,
      jobStartDate,
      jobStartTime,
      jobEndDate,
      jobEndTime,
      conveyance,
      operation,
      runs,
      jobRemarks,
      personnel,
      equipment,
      sequenceOfEvents,
      pceRunNumber,
      nptHours,
      pce,
      pceMinId,
      pceTotalLength,
      toolstringRunNumber,
      toolstring,
      toolstringTotalLength,
      toolstringTotalWeight,
      toolstringMaxOd,
      attachments,
    },
    ref
  ) => {
    const { showModal, setShowModal, reportId } = useContext(GlobalContext);
    const sectionBg = useColorModeValue("gray.100", "gray.700");

    const jobStart = moment(
      `${jobStartDate} ${jobStartTime}`,
      "YYYY-MM-DD HH:mm"
    ).format();
    const jobEnd = moment(
      `${jobEndDate} ${jobEndTime}`,
      "YYYY-MM-DD HH:mm"
    ).format();

    const jobDuration = intervalToDuration({
      start: new Date(jobStart),
      end: new Date(jobEnd),
    });

    return (
      <div ref={ref}>
        <Flex w="full" h="100vh" justify="space-between">
          <Flex></Flex>
          <Flex
            flexDirection="column"
            w="full"
            p={3}
            justify="center"
            id="printContainer"
          >
            {/* combined print report start */}
            <div className="overflow-y-auto scrollbar-hide">
              {/* job info start */}
              <Flex w="full" justify="space-between" align="center" mb={2}>
                <Flex w="150px">
                  {!wellType && (
                    <Image
                      src="/default-well-icon.svg"
                      alt="oil well"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Observation Well" && (
                    <Image
                      src="/default-well-icon.svg"
                      alt="oil well"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Appraisal Well" && (
                    <Image
                      src="/default-well-icon.svg"
                      alt="oil well"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "BP Oil Producer" && (
                    <Image
                      src="/beam-pump-oil-producer.svg"
                      alt="beam pump"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "ESP Oil Producer" && (
                    <Image
                      src="/esp-oil-producer.svg"
                      alt="esp"
                      boxSize="60px"
                      objectFit="fill"
                    />
                  )}
                  {wellType === "PCP Oil Producer" && (
                    <Image
                      src="/pcp-oil-producer.svg"
                      alt="pcp"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Gas Lift Oil Producer" && (
                    <Image
                      src="/gas-lift-oil-producer.svg"
                      alt="gas lift"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Self-flow Oil Producer" && (
                    <Image
                      src="/self-flow-oil-producer.svg"
                      alt="oil well"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Gas Producer" && (
                    <Image
                      src="/gas-producer.svg"
                      alt="gas producer"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Gas Injector" && (
                    <Image
                      src="/gas-injector.svg"
                      alt="gas injector"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Water Injector" && (
                    <Image
                      src="/water-injector.svg"
                      alt="water injector"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Water Disposal Well" && (
                    <Image
                      src="/water-disposal-well.svg"
                      alt="water disposal well"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Water Supply Well" && (
                    <Image
                      src="/water-supply-well.svg"
                      alt="water supply well"
                      boxSize="60px"
                    />
                  )}
                  {wellType === "Steam Injector" && (
                    <Image
                      src="/steam-injector.svg"
                      alt="steam injector"
                      boxSize="60px"
                    />
                  )}
                </Flex>
                <Flex flexDirection="column" align="center">
                  <Text fontSize="2xl" fontWeight="bold">
                    {wellName.toUpperCase()}
                  </Text>
                  <Text fontSize="xs">{wellType}</Text>
                </Flex>

                <Flex w="150px" justify="end" mt={-6} pr={-2}>
                  {/* <CloseButton size="sm" onClick={() => alert('close report')} /> */}
                </Flex>
              </Flex>
              <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={2}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Date:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">
                    {moment(reportDate).format("DD/MM/YYYY")}
                  </Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Submitted By:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{submittedBy}</Text>
                </GridItem>
              </Grid>
              <Flex
                w="full"
                bg={sectionBg}
                justify="center"
                align="center"
                mb={2}
              >
                <Text fontSize="xs" fontWeight="bold">
                  Well Details
                </Text>
              </Flex>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Company:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{company}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Field:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{field}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Fluid:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{fluid}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Well Type:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{wellType}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Environment:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{environment}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Status:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">{status}</Text>
                  </Box>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Completion:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{completion}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Well Profile:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{wellProfile}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Drilled:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="12px">
                    {moment(dateDrilled).format("DD/MM/YYYY")}
                  </Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">{`DFE-TBF, ${units?.height}:`}</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{originalElevation}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Latitude:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="12px">{latitude}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Longitude:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{longitude}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Well Remarks:</Text>
                  </Box>
                </GridItem>

                <GridItem w="100%" colSpan={3}>
                  <Text fontSize="xs">{wellRemarks}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={2}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Attachments:</Text>
                  </Box>
                </GridItem>

                <GridItem w="100%" colSpan={3}>
                  {attachments.map((item, index) => (
                    <Flex key={index} align="center">
                      <Flex mr={2}>
                        <AttachmentIcon boxSize={3} />
                      </Flex>
                      <a href={item.fileURL} target="_blank">
                        <Text fontSize="xs">{item.fileName}</Text>
                      </a>
                    </Flex>
                  ))}
                </GridItem>
              </Grid>
              <Flex
                w="full"
                bg={sectionBg}
                justify="center"
                align="center"
                mb={2}
              >
                <Text fontSize="xs" fontWeight="bold">
                  Job Information
                </Text>
              </Flex>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Job Description:</Text>
                  </Box>
                </GridItem>

                <GridItem w="100%" colSpan={3}>
                  <Text fontSize="xs">{jobDescription}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Start Date:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="12px">
                    {moment(jobStartDate).format("DD/MM/YYYY")}
                  </Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Start Time:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{jobStartTime}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">End Date:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="12px">
                    {moment(jobEndDate).format("DD/MM/YYYY")}
                  </Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">End Time:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{jobEndTime}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Conveyance:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="12px">{conveyance}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Operation:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{operation}</Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">NPT Hours:</Text>
                  </Box>
                </GridItem>

                <GridItem w="100%">
                  <Text fontSize="xs">{nptHours}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">No. of Runs:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="12px">{runs?.length}</Text>
                </GridItem>
              </Grid>
              {runs?.map((item, index) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={6} key={index}>
                  <GridItem w="100%" h="4">
                    <Box>
                      <Text fontSize="xs">{`Run ${index + 1} Result :`}</Text>
                    </Box>
                  </GridItem>
                  <GridItem w="100%" h="4">
                    <Flex align="center">
                      {item.result === "Success" && (
                        <Flex
                          boxSize="10px"
                          rounded="full"
                          bg="green.500"
                          mr={2}
                        ></Flex>
                      )}
                      {item.result === "Issues" && (
                        <Flex
                          boxSize="10px"
                          rounded="full"
                          bg="yellow.300"
                          mr={2}
                        ></Flex>
                      )}
                      {item.result === "Fish" && (
                        <Flex
                          boxSize="10px"
                          rounded="full"
                          bg="red.500"
                          mr={2}
                        ></Flex>
                      )}
                      <Flex>
                        <Text fontSize="xs">{item.result}</Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                  <GridItem w="100%" h="4">
                    <Box>
                      <Text fontSize="xs">
                        {`${item.maxDepth} ${units?.depth}`}
                        {/* {item.maxDepth} {`${reportToPrint.units.depth}`} */}
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem w="100%" h="4">
                    <Text fontSize="xs">{item.remarks}</Text>
                  </GridItem>
                </Grid>
              ))}
              <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={2}>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Job Remarks:</Text>
                  </Box>
                </GridItem>

                <GridItem w="100%">
                  <Text fontSize="xs">{jobRemarks}</Text>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Box>
                    <Text fontSize="xs">Job Duration:</Text>
                  </Box>
                </GridItem>
                <GridItem w="100%" h="4">
                  <Text fontSize="xs">{`${jobDuration.days} d ${jobDuration.hours} h ${jobDuration.minutes} min`}</Text>
                </GridItem>
              </Grid>
              <Flex
                w="full"
                bg={sectionBg}
                justify="center"
                align="center"
                mb={2}
              >
                <Text fontSize="xs" fontWeight="bold">
                  Personnel
                </Text>
              </Flex>
              {personnel?.map((item, index) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={6} key={index}>
                  <GridItem w="100%" h="4" colSpan={2}>
                    <Flex>
                      <Flex w="16px">
                        <Text fontSize="xs">{index + 1}</Text>
                      </Flex>
                      <Flex>
                        <Text fontSize="xs">{item.fullName}</Text>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem w="100%" colSpan={2}>
                    <Flex justify="space-between" align="center" w="320px">
                      <Flex w="160px">
                        <Text fontSize="xs">{item.designation}</Text>
                      </Flex>

                      <Flex w="80px">
                        <Text fontSize="xs">{item.crew}</Text>
                      </Flex>

                      <Flex w="80px">
                        <Text fontSize="xs">{item.shift}</Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                </Grid>
              ))}
              <Flex
                w="full"
                bg={sectionBg}
                justify="center"
                align="center"
                my={2}
              >
                <Text fontSize="xs" fontWeight="bold">
                  Equipment
                </Text>
              </Flex>
              {equipment?.map((item, index) => (
                <Flex
                  w="full"
                  justify="space-between"
                  align="center"
                  key={index}
                >
                  <Flex>
                    <Flex w="16px">
                      <Text fontSize="xs">{index + 1}</Text>
                    </Flex>
                    <Flex flex={1}>
                      <Text fontSize="xs">{item.description}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
              <Flex
                w="full"
                bg={sectionBg}
                justify="center"
                align="center"
                my={3}
              >
                <Text fontSize="xs" fontWeight="bold">
                  Sequence of Events
                </Text>
              </Flex>
              {sequenceOfEvents?.map((item, index) => (
                <Flex w="full" justify="start" h="4" key={index}>
                  <Flex mr={5} w="80px">
                    {item.date === "" && <Text fontSize="xs"></Text>}
                    {item.date && (
                      <Text fontSize="xs">
                        {moment(item.date).format("DD/MM/YYYY")}
                      </Text>
                    )}
                  </Flex>
                  <Flex w="60px">
                    <Text fontSize="xs">{item.time}</Text>
                  </Flex>

                  <Flex flex={1}>
                    <Text fontSize="xs">{item.description}</Text>
                  </Flex>
                </Flex>
              ))}

              <div className="page-break" />
              {/* toolstring start */}

              <Flex
                w="full"
                bg={sectionBg}
                justify="center"
                align="center"
                my={3}
              >
                <Text fontSize="xs" fontWeight="bold">
                  Toolstring
                </Text>
              </Flex>
              <Flex w="full" flexDir="column">
                <Flex
                  w="full"
                  h="36px"
                  borderWidth="1px"
                  align="center"
                  justify="space-between"
                  px={1}
                >
                  <Flex w="140px">
                    <Text fontSize="xs">{`Setup used for: ${toolstringRunNumber}`}</Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="md" fontWeight="bold">
                      {`${wellName} Toolstring`}
                    </Text>
                  </Flex>
                  <Flex w="140px" justify="end"></Flex>
                </Flex>
                <Flex
                  h="32px"
                  w="full"
                  borderLeftWidth="1px"
                  borderRightWidth="1px"
                  borderBottomWidth="1px"
                >
                  <Center ml={2} w="30px" borderRightWidth="1px">
                    <Text fontSize="xs" mr={2}>
                      Item
                    </Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">Image</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">Description</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">Connection</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">{`Fishneck, ${units?.diameter}`}</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">{`Weight, ${units?.weight}`}</Text>
                  </Center>

                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">{`Max OD, ${units?.diameter}`}</Text>
                  </Center>
                  <Center w="110px">
                    <Text fontSize="xs">{`Length, ${units?.length}`}</Text>
                  </Center>
                </Flex>
                {toolstring?.map((item, index) => (
                  <Flex
                    h="80px"
                    w="full"
                    borderLeftWidth="1px"
                    borderRightWidth="1px"
                    pos="relative"
                    key={index}
                  >
                    <Center ml={3} w="33px">
                      <Text fontSize="xs" mr={2}>
                        {index + 1}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <img
                        src={item.imageURL}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Center>
                    <Center w="85px" pos="relative">
                      <Text w="85px" h="80px" fontSize="xs" textAlign="center">
                        {item.description}
                      </Text>
                    </Center>
                    <Center w="85px" pos="relative">
                      <Text w="85px" h="80px" fontSize="xs" textAlign="center">
                        {item.connection}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <Text w="85px" h="80px" fontSize="xs" textAlign="center">
                        {item.fishneck}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <Text w="85px" h="80px" fontSize="xs" textAlign="center">
                        {item.weight}
                      </Text>
                    </Center>

                    <Center w="110px">
                      <Text w="85px" h="80px" fontSize="xs" textAlign="center">
                        {item.maxOd}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <Text w="85px" h="80px" fontSize="xs" textAlign="center">
                        {item.length}
                      </Text>
                    </Center>
                  </Flex>
                ))}
                <Flex
                  w="full"
                  h="36px"
                  px={2}
                  borderWidth="1px"
                  align="center"
                  justify="space-between"
                >
                  <Flex>
                    <Text fontSize="xs">Total Items: {toolstring.length}</Text>
                  </Flex>
                  <Flex>
                    <Flex>
                      <Text fontSize="xs">{`Total Weight: ${toolstringTotalWeight} ${units?.weight}`}</Text>
                    </Flex>
                    <Flex ml={3}>
                      <Text fontSize="xs">{`Max. OD: ${toolstringMaxOd} ${units?.diameter}`}</Text>
                    </Flex>
                    <Flex ml={3}>
                      <Text fontSize="xs">{`Total Length: ${toolstringTotalLength} ${units?.length}`}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              {/* toolstring end */}

              {/* job info end */}
              {/* pce start */}

              <Flex
                w="full"
                bg={sectionBg}
                justify="center"
                align="center"
                my={3}
                flexDirection="column"
              >
                <Text fontSize="xs" fontWeight="bold">
                  Pressure Control Equipment
                </Text>
              </Flex>
              <Flex w="full" flexDir="column" my={3}>
                <Flex
                  w="full"
                  h="36px"
                  borderWidth="1px"
                  align="center"
                  justify="space-between"
                  px={1}
                >
                  <Flex w="140px">
                    <Text fontSize="xs">{`Setup used for: ${pceRunNumber}`}</Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="md" fontWeight="bold">
                      {`${wellName} PCE`}
                    </Text>
                  </Flex>
                  <Flex w="140px" justify="end"></Flex>
                </Flex>
                <Flex
                  h="32px"
                  w="full"
                  borderLeftWidth="1px"
                  borderRightWidth="1px"
                  borderBottomWidth="1px"
                >
                  <Center ml={2} w="30px" borderRightWidth="1px">
                    <Text fontSize="xs" mr={2}>
                      Item
                    </Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">Image</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">Description</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">{`P Rating, ${units?.pressure}`}</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">Connection</Text>
                  </Center>
                  <Center w="110px" borderRightWidth="1px">
                    <Text fontSize="xs">{`Min ID, ${units?.diameter}`}</Text>
                  </Center>
                  <Center w="110px">
                    <Text fontSize="xs">{`Length, ${units?.length}`}</Text>
                  </Center>
                </Flex>
                {pce?.map((item, index) => (
                  <Flex
                    h="80px"
                    w="full"
                    borderLeftWidth="1px"
                    borderRightWidth="1px"
                    pos="relative"
                    key={index}
                  >
                    <Center ml={2} w="32px">
                      <Text fontSize="xs" mr={2} textAlign="center">
                        {index + 1}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <img
                        src={item.imageURL}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Center>
                    <Center w="110px" pos="relative">
                      <Text w="90px" h="80px" fontSize="xs" textAlign="center">
                        {item.description}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <Text w="90px" h="80px" fontSize="xs" textAlign="center">
                        {item.pressureRating}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <Text w="90px" h="80px" fontSize="xs" textAlign="center">
                        {item.connection}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <Text w="90px" h="80px" fontSize="xs" textAlign="center">
                        {item.minId}
                      </Text>
                    </Center>
                    <Center w="110px">
                      <Text w="90px" h="80px" fontSize="xs" textAlign="center">
                        {item.length}
                      </Text>
                    </Center>
                  </Flex>
                ))}
                <Flex
                  w="full"
                  h="36px"
                  px={2}
                  borderWidth="1px"
                  align="center"
                  justify="space-between"
                >
                  <Flex>
                    <Text fontSize="xs">Total Items: {pce.length}</Text>
                  </Flex>
                  <Flex>
                    <Flex>
                      <Text fontSize="xs">{`Min. ID: ${pceMinId} ${units?.diameter}`}</Text>
                    </Flex>
                    <Flex ml={3}>
                      <Text fontSize="xs">{`Total Length: ${pceTotalLength} ${units?.length}`}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
            {/* pce end */}

            {/* combined print report end */}

            {/* setup end */}
          </Flex>
          <Flex
            flexDirection="column"
            w="220px"
            borderLeftWidth="1px"
            p={3}
            mt={2}
          ></Flex>
        </Flex>
      </div>
    );
  }
);

export default ViewReport;
