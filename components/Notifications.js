import { useState, useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ViewReport from "./ViewReport";
import {
  Flex,
  Text,
  Button,
  IconButton,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Tag,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CloseButton,
  useToast,
  Circle,
} from "@chakra-ui/react";
import {
  SunIcon,
  MoonIcon,
  SmallCloseIcon,
  SearchIcon,
  AddIcon,
  ViewIcon,
  EditIcon,
  DeleteIcon,
  CopyIcon,
  CloseIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { BsPrinterFill } from "react-icons/bs";
import { useRouter } from "next/router";

import ReactToPrint from "react-to-print";

const Notifications = () => {
  const { data, selected, setSelected, filteredReports } =
    useContext(GlobalContext);
  const modalBg = useColorModeValue("gray.50", "gray.900");
  const sectionBg = useColorModeValue("gray.50", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const btnRef = useRef(null);
  const toast = useToast();
  const router = useRouter();
  const componentRef = useRef();

  const printHandler = () => {
    // alert(
    //   "window.print(), where you can send to printer and save as PDF, Perhaps react-to-print package, where you can select graphics background. You cannot print in dark"
    // );
    return <button>Print</button>;
  };

  return (
    <Flex w="full" flexDir="column">
      {data.map((item, index) => (
        <Flex
          key={index}
          h="36px"
          _hover={{ bg: "gray.300" }}
          w="full"
          my={1}
          p={3}
          align="center"
          onDoubleClick={() => setSelected(item._id)}
          cursor="pointer"
        >
          {item.wellName}
        </Flex>
      ))}

      {selected &&
        filteredReports.map((item, index) => (
          <Modal
            finalFocusRef={btnRef}
            isOpen={selected}
            scrollBehavior={scrollBehavior}
            size="2xl"
            key={index}
          >
            <ModalOverlay />
            <ModalContent bg={modalBg}>
              <ModalHeader p={3}>
                <Flex w="full" justify="end">
                  <Flex>
                    <CloseButton size="sm" onClick={() => setSelected(null)} />
                  </Flex>
                </Flex>
              </ModalHeader>

              <div className="overflow-x-auto overflow-y-auto scrollbar-hide">
                <div>
                  {/* <ReactToPrint
                    trigger={() => <button>Print</button>}
                    content={() => componentRef.current}
                  /> */}
                  <ViewReport
                    _id={item._id}
                    ref={componentRef}
                    wellType={item.wellType}
                    wellName={item.wellName}
                    dateSubmitted={item.dateSubmitted}
                    submittedBy={item.submittedBy}
                    company={item.company}
                    field={item.field}
                    fluid={item.fluid}
                    environment={item.environment}
                    status={item.status}
                    completion={item.completion}
                    wellProfile={item.wellProfile}
                    spudDate={item.spudDate}
                    originalElevation={item.originalElevation}
                    units={item.units}
                    latitude={item.latitude}
                    longitude={item.longitude}
                    wellRemarks={item.wellRemarks}
                    jobDescription={item.jobDescription}
                    jobStartDate={item.jobStartDate}
                    jobStartTime={item.jobStartTime}
                    jobEndDate={item.jobEndDate}
                    jobEndTime={item.jobEndTime}
                    conveyance={item.conveyance}
                    operation={item.operation}
                    runs={item.runs}
                    jobRemarks={item.jobRemarks}
                    personnel={item.personnel}
                    equipment={item.equipment}
                    sequenceOfEvents={item.sequenceOfEvents}
                    pce={item.pce}
                    pceRunNumber={item.pceRunNumber}
                    nptHours={item.nptHours}
                    pceMinId={item.pceMinId}
                    pceTotalLength={item.pceTotalLength}
                    toolstring={item.toolstring}
                    toolstringRunNumber={item.toolstringRunNumber}
                    toolstringTotalLength={item.toolstringTotalLength}
                    toolstringTotalWeight={item.toolstringTotalWeight}
                    toolstringMaxOd={item.toolstringMaxOd}
                    attachments={item.attachments}
                  />
                </div>
              </div>

              <ModalFooter p={3} mt={6}>
                <Flex w="full" justify="space-between">
                  <Flex>
                    <Button
                      onClick={() => alert("open edit form")}
                      size="sm"
                      leftIcon={<EditIcon />}
                      variant="outline"
                      colorScheme="blue"
                      w="80px"
                      mr={3}
                    >
                      Edit
                    </Button>

                    {/* This is a new button */}

                    <ReactToPrint
                      trigger={() => (
                        <Button
                          size="sm"
                          leftIcon={<BsPrinterFill />}
                          variant="outline"
                          colorScheme="blue"
                        >
                          Print
                        </Button>
                      )}
                      content={() => componentRef.current}
                    />

                    {/* This is the old button  */}

                    {/* <Button
                      onClick={printHandler}
                      size="sm"
                      leftIcon={<BsPrinterFill />}
                      variant="outline"
                      colorScheme="blue"
                    >
                      Print
                    </Button> */}
                  </Flex>
                  <Flex>
                    <Button
                      size="sm"
                      variant="outline"
                      colorScheme="green"
                      leftIcon={<CheckIcon />}
                      onClick={() => alert("set as Verified")}
                    >
                      Approve
                    </Button>
                  </Flex>
                </Flex>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ))}
    </Flex>
  );
};

export default Notifications;
