import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from '@/components/ui/image';
import { Text } from "react-native";
import { Button, ButtonText } from "../button";
import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton
    , AlertDialogFooter, AlertDialogBody, } from "@/components/ui/alert-dialog"
import React from "react";

export default function ArtifactListItem({ artifact }) {

    const [showAlertDialog, setShowAlertDialog] = React.useState(false)
    const handleClose = () => setShowAlertDialog(false)

    return (
        <Card className="p-5 rounded-lg max-w-[170px] m-3">
                <Image
                    source={{
                    uri: artifact.img,
                    }}
                    className="mb-6 h-[150px] w-full rounded-md aspect-[263/240]"
                    alt="image"
                />
                <Heading size="md" className="mb-4">
                    {artifact.name}
                </Heading>
                <Text className="text-mg font-normal mb-2 text-typography-700">
                    {`$` + artifact.price}
                </Text>
                <Button><ButtonText>Add to Cart</ButtonText></Button>
                <Button onPress={() => setShowAlertDialog(true)} className="mt-1">
                    <ButtonText>See Details</ButtonText>
                </Button>
                <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="lg">
                    <AlertDialogBackdrop />
                    <AlertDialogContent>
                    <AlertDialogHeader className="justify-center">
                        <Heading className="text-typography-950 font-semibold " size="md">
                            {artifact.name}
                        </Heading>
                    </AlertDialogHeader>
                    <AlertDialogBody className="mt-3 mb-4">
                        <Image
                            source={{
                            uri: artifact.img,
                            }}
                            className="mb-6 h-[300px] w-full rounded-md aspect-[263/240]"
                            alt="image"
                        />
                    </AlertDialogBody>
                    <AlertDialogFooter className="">
                        <Button
                        variant="outline"
                        action="secondary"
                        onPress={handleClose}
                        size="sm"
                        >
                        <ButtonText>Back</ButtonText>
                        </Button>
                        <Button size="sm" onPress={handleClose}>
                        <ButtonText>Add to Cart</ButtonText>
                        </Button>
                    </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
        </Card>
    )
}