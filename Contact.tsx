
import {
    Box,
    Button,
    Container,
    Grid2,
    Paper,
    TextField,
    Typography,
    MenuItem,
    Alert,
    CircularProgress,
    InputAdornment,
    Tooltip,
    IconButton,
} from "@mui/material";

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmailIcon from '@mui/icons-material/Email';
import { contactStyles } from "./Contact.css";
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Message, Person, Subject } from "@mui/icons-material";

// フォームデータの型定義
interface FormData {
    name: string;
    email: string;
    inquiryType: string;
    subject: string;
    message: string;
}

// バリデーションスキーマの定義
const schema = yup
    .object({
        name: yup.string().required('お名前は必須です'),
        email: yup
            .string()
            .required('メールアドレスは必須です')
            .email('有効なメールアドレスを入力してください'),
        inquiryType: yup.string().required('お問い合わせ種別を選択してください'),
        subject: yup
            .string()
            .required('件名は必須です'),
        message: yup
            .string()
            .required('メッセージは必須です')
            .min(10, 'メッセージは10文字以上で入力してください'),
    })
    .required();

// お問い合わせ種別のオプション
const inquiryTypes = [
    { value: '', label: '選択してください' },
    { value: 'general', label: '一般的なお問い合わせ' },
    { value: 'service', label: 'サービスについて' },
    { value: 'support', label: 'サポートについて' },
    { value: 'other', label: 'その他' },

];

export const Contact = () => {
    // フォーム送信状態の処理
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // React Hook Form 設定
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        // フォーカスが外れた時にバリデーション
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            inquiryType: '',
            subject: '',
            message: '',
        },
    });

    const onSubmit = (data: FormData) => {
        setIsSubmitting(true);
        setSubmitError(null);

        // API送信をシミュレート
        setTimeout(() => {
            try {
                console.log('送信データ：', data);

                // 送信成功
                setIsSubmitted(true);
                reset();
                // 5秒後に成功メッセージを非表示
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            } catch (error) {
                setSubmitError(
                    '送信中にエラーが発生しました。後ほど再度お試しください。'
                );
                console.error('送信エラー', error);
            } finally {
                setIsSubmitting(false);
            }
        }, 1500)
    };

    return (

        <Container sx={contactStyles.container}>
            <Box sx={contactStyles.content}>
                <Typography variant="h3" sx={contactStyles.heading}>
                    お問い合わせ
                </Typography>

                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                    <Typography variant="body1" sx={contactStyles.contactInfo}>
                        以下のフォームから直接お問い合わせいただけます。<br />
                        Email: acutesyscom.contact@acute-sc.co.jp <br />
                        Tel: 050-5536-9771
                    </Typography>

                    {/* 成功メッセージ */}
                    {isSubmitted && (
                        <Alert
                            severity="success"
                            sx={{ mb: 3 }}
                            onClose={() => setIsSubmitted(false)}
                        >
                            お問い合わせありがとうございます。内容を確認いたしました。
                        </Alert>
                    )}


                    {/* エラーメッセージ */}
                    {submitError && (
                        <Alert
                            severity="error"
                            sx={{ mb: 3 }}
                            onClose={() => setSubmitError(null)}
                        >
                            {submitError}
                        </Alert>
                    )}

                    {/* 問い合わせフォーム */}
                    <Box component="form" sx={contactStyles.form} onSubmit={handleSubmit(onSubmit)}>
                        <Grid2>
                            {/* お名前フィールド */}
                            <Grid2 className='form-fade-in-1'>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label='お名前'
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Person color="action" />
                                                    </InputAdornment>
                                                )
                                            }}

                                            sx={{
                                                ...contactStyles.formField,
                                                ...contactStyles.animatedFiedld,
                                                ...(field.value && !errors.name ? contactStyles.validField : {}),
                                                ...(errors.name ? contactStyles.invalidField : {})
                                            }}
                                        />
                                    )}
                                />
                            </Grid2>

                            {/* メールアドレスフィールド */}
                            <Grid2 className='form-fade-in-2'>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label='メールアドレ'
                                            type="email"
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailIcon color="action" />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Tooltip title="example@email.com の形式で入力してください">
                                                            <IconButton edge="end" size="small">
                                                                <HelpOutlineIcon fontSize="small" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </InputAdornment>
                                                )
                                            }}
                                            sx={contactStyles.formField}
                                        />

                                    )}
                                />
                            </Grid2>
                            {/* お問い合わせ種別フィールド */}
                            <Grid2 className='form-fade-in-3'>
                                <Controller
                                    name="inquiryType"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            select
                                            fullWidth
                                            label='お問い合わせ種別'
                                            error={!!errors.inquiryType}
                                            helperText={errors.inquiryType?.message}
                                            sx={contactStyles.formField}
                                        >
                                            {inquiryTypes.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Grid2>

                            {/* 件名フィールド */}
                            <Grid2 className='form-fade-in-4'>
                                <Controller
                                    name="subject"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label='件名'
                                            error={!!errors.subject}
                                            helperText={errors.subject?.message}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Subject color="action" />
                                                    </InputAdornment>
                                                )
                                            }}
                                            sx={contactStyles.formField}

                                        />
                                    )}
                                />
                            </Grid2>
                            {/* メッセージフィールド */}
                            <Grid2 className='form-fade-in-5'>
                                <Controller
                                    name="message"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label='メッセージ'
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Message color="action" />
                                                    </InputAdornment>
                                                )
                                            }}
                                            sx={contactStyles.formField}
                                        />
                                    )}
                                />
                            </Grid2>

                            <Grid2>
                                <Box sx={contactStyles.mobileBtnContainer}>
                                    {/* 送信ボタンの隣にリセットボタン */}
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        onClick={() => {
                                            // フォームを初期状態にリセット
                                            reset({
                                                name: '',
                                                email: '',
                                                inquiryType: '',
                                                subject: '',
                                                message: '',

                                            });
                                            // 送信状態をリセット
                                            setIsSubmitted(false);
                                            setSubmitError(null);
                                        }}
                                    >
                                        クリア
                                    </Button>

                                    {/* 送信ボタン */}
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        startIcon={
                                            isSubmitting ? (
                                                <CircularProgress size={20} color="inherit" />
                                            ) : null
                                        }
                                        sx={contactStyles.submitButton}
                                    >
                                        {isSubmitting ? '送信中...' : '送信する'}
                                    </Button>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}